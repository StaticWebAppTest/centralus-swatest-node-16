module.exports = async function (context, req) {
  const date = "2023-08-23T19:06:23.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

