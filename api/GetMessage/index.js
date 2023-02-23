module.exports = async function (context, req) {
  const date = "2023-02-23T11:08:46.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

