module.exports = async function (context, req) {
  const date = "2023-10-18T09:09:25.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

