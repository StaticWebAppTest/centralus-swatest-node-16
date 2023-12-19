module.exports = async function (context, req) {
  const date = "2023-12-19T11:11:10.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

