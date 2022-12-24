module.exports = async function (context, req) {
  const date = "2022-12-24T11:07:11.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

