module.exports = async function (context, req) {
  const date = "2023-11-04T16:10:07.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

