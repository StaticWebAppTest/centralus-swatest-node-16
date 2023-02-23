module.exports = async function (context, req) {
  const date = "2023-02-23T14:10:33.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

