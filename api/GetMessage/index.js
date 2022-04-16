module.exports = async function (context, req) {
  const date = "2022-04-16T11:09:09.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

