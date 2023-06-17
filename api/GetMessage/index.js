module.exports = async function (context, req) {
  const date = "2023-06-17T08:10:19.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

