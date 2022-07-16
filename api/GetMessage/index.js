module.exports = async function (context, req) {
  const date = "2022-07-16T11:09:33.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

