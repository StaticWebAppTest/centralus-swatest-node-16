module.exports = async function (context, req) {
  const date = "2023-08-28T04:10:23.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

