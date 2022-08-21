module.exports = async function (context, req) {
  const date = "2022-08-21T11:09:27.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

