module.exports = async function (context, req) {
  const date = "2022-07-12T19:08:25.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

