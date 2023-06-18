module.exports = async function (context, req) {
  const date = "2023-06-18T11:06:42.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

