module.exports = async function (context, req) {
  const date = "2024-06-11T04:12:40.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

