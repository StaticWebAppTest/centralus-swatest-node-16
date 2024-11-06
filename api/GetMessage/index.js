module.exports = async function (context, req) {
  const date = "2024-11-06T11:10:04.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

