module.exports = async function (context, req) {
  const date = "2023-10-18T04:10:52.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

