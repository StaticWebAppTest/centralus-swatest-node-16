module.exports = async function (context, req) {
  const date = "2022-05-01T11:09:09.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

