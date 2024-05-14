module.exports = async function (context, req) {
  const date = "2024-05-14T10:12:08.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

