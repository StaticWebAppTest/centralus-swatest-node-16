module.exports = async function (context, req) {
  const date = "2024-05-04T18:11:03.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

