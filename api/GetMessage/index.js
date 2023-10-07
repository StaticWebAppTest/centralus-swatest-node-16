module.exports = async function (context, req) {
  const date = "2023-10-07T11:06:36.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

