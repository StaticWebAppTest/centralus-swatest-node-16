module.exports = async function (context, req) {
  const date = "2022-10-16T11:10:24.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

