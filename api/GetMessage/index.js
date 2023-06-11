module.exports = async function (context, req) {
  const date = "2023-06-11T13:09:36.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

