module.exports = async function (context, req) {
  const date = "2023-01-23T07:09:06.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

