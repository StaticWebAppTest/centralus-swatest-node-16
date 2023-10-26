module.exports = async function (context, req) {
  const date = "2023-10-26T06:11:51.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

