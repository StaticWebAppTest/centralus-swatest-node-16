module.exports = async function (context, req) {
  const date = "2023-07-04T07:09:57.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

