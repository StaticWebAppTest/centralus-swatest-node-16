module.exports = async function (context, req) {
  const date = "2022-12-19T09:09:54.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

