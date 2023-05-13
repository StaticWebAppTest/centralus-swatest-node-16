module.exports = async function (context, req) {
  const date = "2023-05-13T11:07:03.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

