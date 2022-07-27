module.exports = async function (context, req) {
  const date = "2022-07-27T20:12:00.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

