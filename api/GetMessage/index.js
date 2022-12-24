module.exports = async function (context, req) {
  const date = "2022-12-24T13:11:56.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

