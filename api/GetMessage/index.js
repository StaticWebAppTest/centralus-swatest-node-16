module.exports = async function (context, req) {
  const date = "2023-03-10T14:09:45.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

