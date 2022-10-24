module.exports = async function (context, req) {
  const date = "2022-10-24T13:53:12.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

