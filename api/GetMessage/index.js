module.exports = async function (context, req) {
  const date = "2022-08-20T11:09:27.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

