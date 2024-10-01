module.exports = async function (context, req) {
  const date = "2024-10-01T15:12:09.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

