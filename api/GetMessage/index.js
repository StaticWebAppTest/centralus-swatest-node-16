module.exports = async function (context, req) {
  const date = "2022-03-19T16:13:05.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

