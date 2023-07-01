module.exports = async function (context, req) {
  const date = "2023-07-01T04:11:39.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

