module.exports = async function (context, req) {
  const date = "2023-05-04T18:11:02.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

