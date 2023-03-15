module.exports = async function (context, req) {
  const date = "2023-03-15T05:09:27.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

