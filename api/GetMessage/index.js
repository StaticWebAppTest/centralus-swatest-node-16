module.exports = async function (context, req) {
  const date = "2022-03-29T09:10:23.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

