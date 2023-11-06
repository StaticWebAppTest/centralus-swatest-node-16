module.exports = async function (context, req) {
  const date = "2023-11-06T11:07:47.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

