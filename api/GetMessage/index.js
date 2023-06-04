module.exports = async function (context, req) {
  const date = "2023-06-04T12:15:37.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

