module.exports = async function (context, req) {
  const date = "2023-11-23T11:07:49.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

