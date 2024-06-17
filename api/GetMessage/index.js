module.exports = async function (context, req) {
  const date = "2024-06-17T07:10:09.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

