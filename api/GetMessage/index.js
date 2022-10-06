module.exports = async function (context, req) {
  const date = "2022-10-06T05:30:38.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

