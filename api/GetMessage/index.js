module.exports = async function (context, req) {
  const date = "2023-12-07T11:08:13.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

