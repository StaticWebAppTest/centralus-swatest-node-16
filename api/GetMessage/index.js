module.exports = async function (context, req) {
  const date = "2023-07-04T21:09:02.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

