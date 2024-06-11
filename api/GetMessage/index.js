module.exports = async function (context, req) {
  const date = "2024-06-11T09:12:10.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

