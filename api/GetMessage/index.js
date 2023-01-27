module.exports = async function (context, req) {
  const date = "2023-01-27T04:11:45.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

