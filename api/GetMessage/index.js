module.exports = async function (context, req) {
  const date = "2022-06-13T04:32:03.074Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

