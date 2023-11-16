module.exports = async function (context, req) {
  const date = "2023-11-16T15:09:52.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

