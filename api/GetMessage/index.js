module.exports = async function (context, req) {
  const date = "2023-04-10T19:07:05.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

