module.exports = async function (context, req) {
  const date = "2023-07-05T14:10:06.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

