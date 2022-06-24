module.exports = async function (context, req) {
  const date = "2022-06-24T04:31:45.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

