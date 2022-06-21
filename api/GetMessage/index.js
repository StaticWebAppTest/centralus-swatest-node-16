module.exports = async function (context, req) {
  const date = "2022-06-21T11:15:27.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

